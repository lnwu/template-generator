import download from "download-git-repo"

export const downRepo = (repo: string, targetPath: string) => new Promise((resolve, reject) => {
  download(repo, targetPath, (err: any) => {
    if (err) {
      console.error("Download error", err)
      reject(err)
    } else {
      resolve()
    }
  })
})