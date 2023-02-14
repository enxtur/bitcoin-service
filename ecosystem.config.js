module.exports = {
  apps: [{
    name: "bit",
    script: "npm",
    args: "start",
    watch: ["build"],
    watch_delay: 1000,
  }]
}