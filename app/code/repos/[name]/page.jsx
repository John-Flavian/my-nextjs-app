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
            <Repo name={name} />
            <RepoDirs name={name} />
        </div>
    )
}

export default RepoPage