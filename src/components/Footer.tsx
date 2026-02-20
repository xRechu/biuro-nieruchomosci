export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <p>
                    &copy; {year} Biuro Nieruchomości. Wszelkie prawa zastrzeżone.
                </p>
            </div>
        </footer>
    );
}
