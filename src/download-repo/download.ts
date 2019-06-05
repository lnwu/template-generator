import download from "download-git-repo"

export const downRepo = (repo: string) => new Promise((resolve, reject) => {
  download(repo, "tmp", (err: any) => {
    if (err) {
      console.error("Download error", err)
      reject(err)
    } else {
      resolve()
    }
  })
})