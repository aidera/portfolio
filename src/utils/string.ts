function copyToClipboard(string: string) {
  return navigator.clipboard.writeText(string);
}

const commandChecker = (message: string) => {
  const commandRegex = /^\/.+$/;
  const isCommand = commandRegex.test(message);
  return isCommand;
};

export { copyToClipboard, commandChecker };
