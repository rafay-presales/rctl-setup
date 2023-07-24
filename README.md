# rctl-setup
A GitHub Action that downloads and configures the Rafay rctl CLI.

## Example usage
```yaml
uses: rafay-presales/rctl-setup@main
```
Be sure to set the following environment variables as decribed [here](https://docs.rafay.co/cli/config/#env-variables) (that may be managed as GitHub Action secrets):  
```bash
RCTL_REST_ENDPOINT="console.rafay.dev"
RCTL_OPS_ENDPOINT="console.rafay.dev"
RCTL_API_KEY="xxxxxxxx"
RCTL_API_SECRET="yyyyyyyyyyyyyyyyyyyy"
RCTL_PROJECT="defaultproject"
```
