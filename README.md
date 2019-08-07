# Javascript Training 101

### Getting Started

If you do not have node and npm installed follow these steps:

```sh
# Download the nvm install script via cURL
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash

# Check nvm version installed
nvm --version

# Install the latest Node LTS version
nvm install --lts

# Use the latest LTS verison
nvm use --lts
```

If you do not have Git installed follow these steps on [Git Setup](https://www.atlassian.com/git/tutorials/install-git#mac-os-x)

If you haven't cloned the repository follow these steps:

```sh
cd ~/Desktop
git clone https://github.com/surajverma2587/javascript-training.git
cd javascript-training
npm install
npm run test
```

If you have already cloned the repository follow these steps:

```sh
cd ~/Desktop/javascript-training
npm install
npm run test
```

You should see a bunch of failing tests except for the last one which should read:

```sh
PASS src/__tests__/index.spec.js
Setup
  ✓ should say 'All Good!!'
```

To run the tests follow these steps:

```sh
npm run test:jest
```

To run the tests in watch mode follow these steps:

```sh
npm run test:watch
```

To check for linting errors follow these steps:

```sh
npm run lint
```

## Challenges

1.  [Hello World](https://github.com/surajverma2587/javascript-training/blob/master/src/hello-world/README.md)
2.  [Resistor Color](https://github.com/surajverma2587/javascript-training/blob/master/src/resistor-color/README.md)
3.  [Resistor Color Combo](https://github.com/surajverma2587/javascript-training/blob/master/src/resistor-color-combo/README.md)
4.  [Darts](https://github.com/surajverma2587/javascript-training/blob/master/src/darts/README.md)
5.  [RNA Transcription](https://github.com/surajverma2587/javascript-training/blob/master/src/rna-transcription/README.md)
6.  [Triangle](https://github.com/surajverma2587/javascript-training/blob/master/src/triangle/README.md)
