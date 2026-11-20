// src/data/reviews.ts
// Reseñas reales de la ficha de Google (PLAN-MAESTRO 3.3). Copiar tal cual: texto, nombre
// como aparece en Google y fecha. Solo con permiso del autor o vía la API de la ficha.
// Mientras el arreglo esté vacío, el bloque de reseñas no se muestra.
// No agregar aggregateRating al JSON-LD: Google no acepta reseñas propias marcadas en el sitio del negocio.

export type Review = {
  author: string;
  /** Fecha ISO, por ejemplo '2026-12-03'. */
  date: string;
  /** Estrellas de 1 a 5, como en la ficha. */
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  /** Comuna, si el autor la menciona. */
  commune?: string;
};

export const REVIEWS: Review[] = [];

/** Enlace a todas las reseñas en Google. TODO: URL de la ficha de Google Business. */
export const REVIEWS_URL = '';
