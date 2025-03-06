module.exports = {
  target: (dependencyName) => {
    // List of React-related packages to limit to minor updates
    const reactPackages = [
      'react',
      'react-dom',
      '@types/react',
      '@types/react-dom',
    ];

    // If it's a React-related package, only allow minor updates
    if (reactPackages.includes(dependencyName)) {
      return 'minor';
    }

    // For all other packages, allow all updates
    return 'latest';
  },
};
