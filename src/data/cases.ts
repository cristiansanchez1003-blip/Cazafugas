// src/data/cases.ts
// Casos reales con foto de antes y después (PLAN-MAESTRO 3.4). Solo con permiso escrito
// del cliente final. Guardar las fotos en src/assets/casos/ e importarlas aquí.
// Mientras el arreglo esté vacío, el bloque de casos no se muestra.
import type { ImageMetadata } from 'astro';

export type Case = {
  title: string;
  /** Comuna donde se hizo el trabajo. */
  commune: string;
  /** Id del servicio (fugas, calefones, redes, destapes, griferia). */
  serviceId: string;
  problem: string;
  solution: string;
  before: ImageMetadata;
  beforeAlt: string;
  after: ImageMetadata;
  afterAlt: string;
};

export const CASES: Case[] = [];
