module.exports = {
  target: (dependencyName) => {
    const minorPackages = [];

    // If it's a minor-only package, only allow minor updates
    if (minorPackages.includes(dependencyName)) {
      return 'minor';
    }

    // For all other packages, allow all updates
    return 'latest';
  },
};
