const {
    Builder,
    Capabilities,
    until
  } = require("selenium-webdriver");
  
  const chromedriver = require("chromedriver");
  
  const driver = new Builder()
    .withCapabilities(Capabilities.chrome())
    .build();