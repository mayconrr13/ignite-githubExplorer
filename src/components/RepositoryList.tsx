import React, { useEffect, useState } from 'react'
import RepositoryItem from './RepositoryItem'

import '../styles/repositories.scss'

interface Repository {
    name: string;
    description: string;
    html_url: string;
}

const RepositoryList = () => {
    const [repositories, setRepositories] = useState<Repository[]>([])

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, [])

    return (
        <section className='repository-list'>
            <h1>Lista de Repositórios</h1>
            <ul>
                {repositories && repositories.map(repo => {
                    return <RepositoryItem key={repo.name} repository={repo} />
                })}
            </ul>
        </section>
    )
}

export default RepositoryList
