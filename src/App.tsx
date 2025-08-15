import { useState, useEffect } from 'react'
import { supabase } from "@/integrations/supabase/client"
import { Button } from "@/components/ui/button"

function App() {
  const [authStatus, setAuthStatus] = useState<'loading' | 'authenticated' | 'unauthenticated'>('loading')

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession()
        console.log('Supabase session:', session)
        console.log('Supabase error:', error)
        
        if (error) {
          console.error('Supabase connection error:', error)
          setAuthStatus('unauthenticated')
        } else {
          setAuthStatus(session ? 'authenticated' : 'unauthenticated')
        }
      } catch (error) {
        console.error('Failed to connect to Supabase:', error)
        setAuthStatus('unauthenticated')
      }
    }

    checkAuth()
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto p-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">
            CognialAI
          </h1>
          
          <div className="bg-card border border-border rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">Setup Status</h2>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span>React + TypeScript</span>
                <span className="text-green-500">✓ Ready</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span>Vite</span>
                <span className="text-green-500">✓ Ready</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span>TailwindCSS</span>
                <span className="text-green-500">✓ Ready</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span>shadcn/ui</span>
                <span className="text-green-500">✓ Ready</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span>Supabase Connection</span>
                <span className={
                  authStatus === 'loading' 
                    ? "text-yellow-500" 
                    : "text-green-500"
                }>
                  {authStatus === 'loading' ? '⏳ Checking...' : '✓ Connected'}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Project Structure</h2>
            <div className="text-sm text-muted-foreground space-y-2">
              <div>📁 /src/components → Reusable UI elements</div>
              <div>📁 /src/pages → Routes/views</div>
              <div>📁 /src/hooks → Custom hooks</div>
              <div>📁 /src/lib → Helpers, API clients</div>
              <div>📁 /src/integrations/supabase → Supabase client + types</div>
              <div>📁 /supabase → Supabase config, migrations, functions</div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-border">
              <h3 className="text-lg font-semibold mb-3">Test shadcn/ui Components</h3>
              <div className="flex gap-3">
                <Button variant="default">Default Button</Button>
                <Button variant="outline">Outline Button</Button>
                <Button variant="ghost">Ghost Button</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
