import React, { createContext, useState, useEffect, ReactNode } from "react";
import FingerprintJS from "@fingerprintjs/fingerprintjs";

function formatUUID(str: string) {
  return str.replace(/(\w{8})(\w{4})(\w{4})(\w{4})(\w{12})/, "$1-$2-$3-$4-$5");
}

interface UserUUIDContextType {
  userUUID: string;
}

const UserUUIDContext = createContext<UserUUIDContextType>({
  userUUID: "",
});

const UserUUIDProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [userUUID, setUserUUID] = useState<string>("");

  useEffect(() => {
    const loadFingerprint = async () => {
      const fp = await FingerprintJS.load();
      const result = await fp.get();
      const id = formatUUID(result.visitorId);
      setUserUUID(id);
    };

    loadFingerprint();
  }, []);

  return (
    <UserUUIDContext.Provider value={{ userUUID }}>
      {children}
    </UserUUIDContext.Provider>
  );
};

export { UserUUIDProvider, UserUUIDContext };
