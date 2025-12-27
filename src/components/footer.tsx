export function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-6 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Ton Apps. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
