const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary-foreground/60 text-sm">
            Байер в Китае • Поиск и закуп товаров под заказ
          </p>
          <p className="text-primary-foreground/40 text-xs mt-4">
            © {new Date().getFullYear()} Жакыпбекова Акбота. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
