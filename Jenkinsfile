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
    post {
        always {
            sh 'echo cleanup after everything'
            discordSend description: "Jenkins Pipeline Build", footer: "continuous-integration/jenkins/branch "+ currentBuild.currentResult + "", link: env.BUILD_URL, result: currentBuild.currentResult, title: JOB_NAME, webhookURL: "https://discord.com/api/webhooks/1103353416559906848/IbyFtbfvn2NDFyCnMPFaQ1r7L16UhRT_f5SscsnrdGkFCwFFQ9jSmPtjzqM-YdxacilO"
        }

        failure {
            sh 'echo only on failure' 
        }

        success {
            sh 'echo only on success' 
        }

        changed {
            sh 'echo only on if status changed from success to failure or vice a versa' 
        }

        unstable {
            sh 'echo only on unstable' 
        }
    }
  }
  
  
