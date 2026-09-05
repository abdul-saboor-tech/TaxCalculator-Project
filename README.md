# Tax Calculator

## Run locally

```bash
npm install
npm test
```

Open `index.html` in a browser.

## Docker

```bash
docker build -t tax-calculator .
docker run -d -p 8080:80 --name tax-calculator tax-calculator
```

Open http://localhost:8080
