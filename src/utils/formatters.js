export const formatCardNumber = (value) => {
  return value
    .replace(/\D/g, "")
    .replace(/(.{4})/g, "$1 ")
    .trim();
};

export const formatExpireDate = (value) => {
  return value
    .replace(/\D/g, "")
    .replace(/^(\d{2})(\d{0,4})/, "$1 / $2")
    .trim();
};
