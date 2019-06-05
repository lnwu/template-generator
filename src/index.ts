#!/usr/bin/env node

import { Action } from "./enum";
import { downRepo } from "./download-repo/download";

const [, , action, templateName] = process.argv

if (action === Action.Create) {
  (async () => {
    try {
      console.log("Start downloading repo...")
      await downRepo(templateName)
    } catch (error) {
      console.error("Download repo error: ", error)
    }
  })()
} else {
  console.info("Not support!")
}