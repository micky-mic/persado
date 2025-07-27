import { fetchContent } from '@/app/actions/content/data';
import { fetchAuthenticatedUser, fetchCommission } from '@/app/actions/user/data';
import About from '@/components/content/About';

export const dynamic = "force-dynamic"

const page = async () => {

  const content = await fetchContent() || [];

  return (
    <About
      data={JSON.parse(JSON.stringify(content))}
    />
  )
}

export default page