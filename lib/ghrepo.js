const axios = require('axios');

const SearchRepo = (repo) => {
    return new Promise( async (resolve, reject) => {
        await axios.get(`https://api.github.com/search/repositories?q=${repo}`)
            .then(response => {
                if(response.status == 200){
                    const results = response.data.items
                    
                    data = {}
                    data.code = response.status
                    data.message = "success"
                    data.totalCount = response.data.total_count
                    data.items = []
                    data.coder = "@ariasu.xyz"

                    if(data.totalCount != 0){
                        results.forEach((res) => {
                            data.items.push({
                                id: res.id,
                                node_d: res.node_id,
                                name_repo: res.name,
                                full_name_repo: res.full_name,
                                url_repo: res.html_url,
                                description: res.description,
                                git_url: res.git_url,
                                ssh_url: res.ssh_url,
                                clone_url: res.clone_url,
                                svn_url: res.svn_url,
                                homepage: res.homepage,
                                stargazers: res.stargazers_count,
                                watchers: res.watchers,
                                forks: res.forks,
                                default_branch: res.default_branch,
                                language: res.language,
                                is_private: res.private,
                                is_fork: res.fork,
                                created_at: res.created_at,
                                updated_at: res.updated_at,
                                pushed_at: res.pushed_at,
                            })
                        })
                    }else{
                        data.items = "Repositories not found"
                    }

                    resolve(data)
                }else{
                    reject({
                        code: 404,
                        success: false,
                        message: "Internal Server Error"
                    })
                }
            })
            .catch(err => {
                reject(err)
            })
    })
 }

 module.exports.SearchRepo = SearchRepo