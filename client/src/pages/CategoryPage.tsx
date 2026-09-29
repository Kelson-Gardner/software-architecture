import { EntityCard, type EntityCardProps } from "../components/EntityCard";
// Category will be a type such as MLB, NBA, Country, Theatre, etc.
function CategoryPage() {
    // Dummy data for now
    const entityCards: EntityCardProps[] = [
        {title: 'Utah Jazz', href: '/tickets/utah-jazz'},
        {title: 'Boston Celtics', href: '/tickets/boston-celtics'},
        {title: 'Los Angelos Lakers', href: '/tickets/los-angelos-lakers'},
        {title: 'John Mayer', href: '/tickets/john-mayer'},
        {title: 'Blink-182', href: '/tickets/blink-182'},
        {title: 'Shane Gillis', href: '/tickets/shane-gillis'},
    ]
    return (
        <span className='entity-cards-list'>
            <ul>
                {entityCards.map((entityCard, index) => (
                    <li>
                        <EntityCard {...entityCard} key={index} />
                    </li>
                ))}
            </ul>
        </span>
    );
}

export default CategoryPage