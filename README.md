## vmss-eslint-config
This package provides VMS Sync's .eslintrc as an extensible shared config.

## Installing

Install everything needed by the config:

```
npx install-peerdeps --dev eslint-config-vmss
```

Create a `.eslintrc` file in the root of your project's directory (it should live where package.json does). Your `.eslintrc` file should look like this:

```json
{
  "extends": [ "vmss" ]
}
```

For TypeScript projects, use `vmss/typescript`.

```json
{
  "extends": [ "vmss/typescript" ]
}
```