// This file is used to generate call to action suggestions based on app features.
'use server';

/**
 * @fileOverview Generates call to action suggestions for apps based on their features.
 *
 * - generateCallToAction - A function that generates call to action suggestions.
 * - GenerateCallToActionInput - The input type for the generateCallToAction function.
 * - GenerateCallToActionOutput - The return type for the generateCallToAction function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateCallToActionInputSchema = z.object({
  appFeatures: z.string().describe('The features of the app.'),
});
export type GenerateCallToActionInput = z.infer<
  typeof GenerateCallToActionInputSchema
>;

const GenerateCallToActionOutputSchema = z.object({
  callToAction: z.string().describe('The generated call to action.'),
});
export type GenerateCallToActionOutput = z.infer<
  typeof GenerateCallToActionOutputSchema
>;

export async function generateCallToAction(
  input: GenerateCallToActionInput
): Promise<GenerateCallToActionOutput> {
  return generateCallToActionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateCallToActionPrompt',
  input: {schema: GenerateCallToActionInputSchema},
  output: {schema: GenerateCallToActionOutputSchema},
  prompt: `Você é um especialista em marketing digital e sua tarefa é gerar uma chamada para ação (CTA) atraente e persuasiva para um aplicativo. Com base nos recursos e benefícios exclusivos do aplicativo, crie uma CTA que incentive os usuários a clicar e fazer o download.

Recursos do Aplicativo: {{{appFeatures}}}

CTA Sugerida:`,
});

const generateCallToActionFlow = ai.defineFlow(
  {
    name: 'generateCallToActionFlow',
    inputSchema: GenerateCallToActionInputSchema,
    outputSchema: GenerateCallToActionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
