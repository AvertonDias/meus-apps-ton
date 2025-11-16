'use client';

import { useFormState } from 'react-dom';
import { handleGenerateCta } from '@/app/actions';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, Sparkles } from 'lucide-react';
import { SubmitButton } from './submit-button';

const initialState = {
  callToAction: '',
  error: '',
};

export function SmartCta() {
  const [state, formAction] = useFormState(handleGenerateCta, initialState);

  return (
    <section id="smart-cta" className="py-16 sm:py-24 bg-secondary">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl flex items-center justify-center gap-2">
            <Sparkles className="h-8 w-8 text-primary" />
            CTA Inteligente
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Não sabe qual chamada para ação (CTA) usar? Descreva os recursos do seu aplicativo abaixo e nossa IA irá gerar uma sugestão poderosa para você!
          </p>
        </div>

        <Card className="mt-12 max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Gerador de Call-to-Action</CardTitle>
            <CardDescription>
              Liste os principais recursos do seu app, um por linha, para obter a melhor sugestão.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form action={formAction} className="space-y-4">
              <Textarea
                name="appFeatures"
                placeholder="Ex: - Rastreamento de hábitos diários&#10;- Gráficos de progresso personalizáveis&#10;- Lembretes e notificações inteligentes"
                rows={5}
                required
              />
              <SubmitButton />
            </form>

            {state.callToAction && (
              <Card className="mt-6 bg-accent/50 border-accent">
                <CardHeader className="flex-row items-start gap-3 space-y-0">
                  <Lightbulb className="h-6 w-6 text-primary" />
                  <div className="flex-1">
                    <CardTitle>CTA Sugerida:</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-medium text-primary">{state.callToAction}</p>
                </CardContent>
              </Card>
            )}
            
            {state.error && (
                <p className="mt-4 text-sm text-destructive">{state.error}</p>
            )}

          </CardContent>
        </Card>
      </div>
    </section>
  );
}
