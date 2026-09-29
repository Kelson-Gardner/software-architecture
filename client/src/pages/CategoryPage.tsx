import { useMemo, useState } from "react";
import { EntityCard, type EntityCardProps } from "../components/EntityCard";
import './CategoryPage.css';

// Dummy data for now
const entityCards: EntityCardProps[] = [
    {title: 'Utah Jazz', href: '/tickets/utah-jazz'},
    {title: 'Boston Celtics', href: '/tickets/boston-celtics'},
    {title: 'Los Angeles Lakers', href: '/tickets/los-angeles-lakers'},
    {title: 'John Mayer', href: '/tickets/john-mayer'},
    {title: 'Blink-182', href: '/tickets/blink-182'},
    {title: 'Shane Gillis', href: '/tickets/shane-gillis'},
]

// Category will be a type such as MLB, NBA, Country, Theatre, etc.
function CategoryPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const filteredEntityCards = useMemo(() => {
        const normalizedSearchTerm = searchTerm.trim().toLowerCase();

        if (!normalizedSearchTerm) {
            return entityCards;
        }

        return entityCards.filter((entityCard) =>
            entityCard.title.toLowerCase().includes(normalizedSearchTerm)
        );
    }, [searchTerm]);

    return (
        <section className='category-page'>
            <header className='category-page-header'>
                <p className='category-page-eyebrow'>Browse</p>
                <h1>Find your next ticket.</h1>
                <label className='category-search'>
                    <span>Search events</span>
                    <input
                        type='search'
                        value={searchTerm}
                        onChange={(event) => setSearchTerm(event.target.value)}
                        placeholder='Search teams, artists, shows'
                    />
                </label>
            </header>

            <div className='entity-cards-summary'>
                {filteredEntityCards.length} {filteredEntityCards.length === 1 ? 'result' : 'results'}
            </div>

            <ul className='entity-cards-list'>
                {filteredEntityCards.map((entityCard) => (
                    <li key={entityCard.href}>
                        <EntityCard {...entityCard} />
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default CategoryPage
