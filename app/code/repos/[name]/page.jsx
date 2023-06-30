import { Suspense } from 'react';
import Repo from '@/app/components/Repo';
import RepoDirs from '@/app/components/RepoDirs';
import Link from 'next/link'

const RepoPage = ({ params: { name } }) => {
    return (
        <div className='card'>
            {/* We can also Use <h2> {params.name} </h2> */}
            <Link href='/code/repos' className='btn btn-back'>
                Back to Repos
            </Link>
            <Suspense fallback={<div>Loading Repo...</div>}>
                <Repo name={name} />
            </Suspense>
            <Suspense fallback={<div>Loading Directories...</div>}>
                <RepoDirs name={name} />
            </Suspense>
        </div>
    )
}

export default RepoPage