import 'zx/globals'

void async function () {
  const x = (await $`kubectl get pods -A -o json`).toString()
  const y = JSON.parse(x)
  console.log(y)
}()