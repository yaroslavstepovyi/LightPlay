const urlPattern = /^(http:\/\/|https:\/\/)?[a-z0-9]+([-.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i

const isValidUrl = (url) => {
  return urlPattern.test(url)
}

export { isValidUrl }
