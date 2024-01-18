const useAbout = (ruLang: boolean) => {

  const getYears = (date: Date) => {
    return Math.floor((new Date().getTime() - date.getTime()) / (365.25 * 24 * 60 * 60 * 1000));
  }

  const texts = {
    title: ruLang
    ? 'Обо мне'
    : 'About me'
  }

  return {
    getYears,
    texts
  }
}

export default useAbout;