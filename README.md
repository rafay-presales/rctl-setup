# rctl-setup
A GitHub Action that downloads and configures the Rafay rctl CLI.

## Example usage
```yaml
uses: rafay-presales/rctl-setup@main
with:
  rafay-api-key: ${{ secrets.RAFAY_API_KEY }}
  rafay-api-secret: ${{ secrets.RAFAY_API_SECRET }}
  rafay-endpoint: 'console.rafay.dev'
  rafay-project: 'defaultproject'
```
  
