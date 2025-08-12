export interface InfoBlockProps {
  preTitle: string;
  mainTitle: string;
  subtitle: string;
  // Opcional. Se os dados forem fornecidos, ele aparece.
  button?: {
    text: string;
    href: string;
  };
}
