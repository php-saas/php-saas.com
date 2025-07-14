import Layout from '@theme/Layout';
import AppLogoIcon from '../components/app-logo-icon';
import { Button } from '../components/ui/button';
import { SiInertia, SiLaravel, SiReact, SiTailwindcss, SiVuedotjs } from '@icons-pack/react-simple-icons';

export default function Home() {
  return (
    <Layout title={`Home`} description="The everything-included starter kit for your next idea">
      <main className="relative">
        <header className='container mx-auto max-w-7xl py-20 flex flex-col items-center h-full bg-gradient-to-b from-background to-background'>
          <AppLogoIcon className='size-28 shadow-xl rounded-xl' />
          <h1 className='text-5xl font-bold mt-10'>PHP-SaaS</h1>
          <p className='text-center text-2xl text-muted-foreground mt-2!'>The everything-included starter kit for your next idea</p>
          <pre className='rounded-lg py-2'><span className='text-indigo-500'>php-saas</span> new my-awesome-project</pre>
          <Button size="lg" className="mt-4" onClick={() => window.location.href = '/docs/early-access'}>
            Early Access
          </Button>
          <p className="text-muted-foreground mt-10 text-center text-sm">
            Built on top of
            <a href="https://laravel.com/starter-kits" target="_blank" className="hover:text-primary underline ml-1">
              Laravel Starter Kits
            </a>
          </p>
          <div className="flex items-center justify-center gap-2">
            <SiLaravel className="size-6 text-muted-foreground" />
            <SiReact className="size-6 text-muted-foreground" />
            <SiVuedotjs className="size-6 text-muted-foreground" />
            <SiTailwindcss className="size-6 text-muted-foreground" />
            <SiInertia className="size-6 text-muted-foreground" />
          </div>
        </header>
      </main>
    </Layout>
  );
}
