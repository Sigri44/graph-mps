# Graph MPS

Initiate subgraph :
```bash
graph init
```

Generate subgraph :
```bash
graph codegen
```

Build subgraph :
```bash
graph build
```

Deploy subgraph :
```bash
graph deploy subgraph-name \
  --version-label v0.0.1-new-version \
  --node https://subgraphs.alchemy.com/api/subgraphs/deploy \
  --deploy-key ALCHEMY_DEPLOY_KEY \
  --ipfs https://ipfs.satsuma.xyz
```
