export type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  message: string;
  website?: string;
};

export type ContactValidationResult =
  | {
      ok: true;
      data: ContactPayload;
    }
  | {
      ok: false;
      error: string;
    };
