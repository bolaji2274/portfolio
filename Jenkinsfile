pipeline {
  agent any

  environment {
    DEPLOY_DIR = "/var/www/portfolio"
  }

  stages {
    stage('Checkout') {
      steps {
        git branch: 'main', url: 'https://github.com/bolaji2274/portfolio.git'
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Build') {
      steps {
        sh 'vitesudo mkdir -p /var/www/iconpoly.edu.ng build'
      }
    }

    stage('Deploy') {
      steps {
        sh "sudo rm -rf ${DEPLOY_DIR}/*"
        sh "sudo cp -a ./dist/* ${DEPLOY_DIR}/"
      }
    }
  }

  post {
    success {
      slackSend channel: '#deployments', message: "Deployment successful: ${env.JOB_NAME} ${env.BUILD_NUMBER}"
    }
    failure {
      slackSend channel: '#deployments', message: "Deployment failed: ${env.JOB_NAME} ${env.BUILD_NUMBER}"
    }
  }
}