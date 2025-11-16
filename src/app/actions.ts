'use server';

import { generateCallToAction } from '@/ai/flows/generate-call-to-action';
import { z } from 'zod';

const schema = z.object({
  appFeatures: z.string().min(10, { message: 'Por favor, descreva pelo menos um recurso.' }),
});

type FormState = {
  callToAction: string;
  error: string;
};

export async function handleGenerateCta(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  try {
    const validatedFields = schema.safeParse({
      appFeatures: formData.get('appFeatures'),
    });

    if (!validatedFields.success) {
      return {
        callToAction: '',
        error: validatedFields.error.flatten().fieldErrors.appFeatures?.[0] || 'Entrada inválida.',
      };
    }
    
    const result = await generateCallToAction({
      appFeatures: validatedFields.data.appFeatures,
    });

    if (!result.callToAction) {
      return {
        callToAction: '',
        error: 'Não foi possível gerar uma CTA. Tente novamente com mais detalhes.',
      };
    }

    return {
      callToAction: result.callToAction,
      error: '',
    };
  } catch (e) {
    console.error(e);
    return {
      callToAction: '',
      error: 'Ocorreu um erro inesperado. Por favor, tente novamente.',
    };
  }
}
