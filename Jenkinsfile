  pipeline {
    agent any
    stages {
      stage ('Checkout code'){
        steps {
          git(url: 'https://github.com/Said-Ait-Driss/said-ait-driss.github.io', branch: 'main')
        }
      }
      stage ('installing dependencies'){
          when {
              changeRequest target: 'main'
          }
          steps {
            echo '📦️ installing deps ...'
          }
      }
    }
  
  }
  
  
