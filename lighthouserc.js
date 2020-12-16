module.exports = {
    ci: {
      collect: {
        startServerCommand: 'npm run serve',
        url: ['http://localhost:8080'],
        numberOfRuns: 5
    },
    assert: {
        assertions: {
          'categories:performance': ['warn', {minScore: 40}],
          'categories:accessibility': ['error', {minScore: 1}]
        }
      },
    upload: {
        target: 'temporary-public-storage',
      }
    },
  };