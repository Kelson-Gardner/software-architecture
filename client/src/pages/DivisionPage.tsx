import { CategoryCard, type CategoryCardProps } from "../components/CategoryCard";
import './DivisionPage.css';

const categoryCards: CategoryCardProps[] = [
    {title: 'NBA', href: '/category/nba'},
    {title: 'MLB', href: '/category/mlb'},
    {title: 'NFL', href: '/category/nfl'},
    {title: 'Rock', href: '/category/rock'},
    {title: 'Country', href: '/category/country'},
    {title: 'Comedy', href: '/category/comedy'},
    {title: 'Magic', href: '/category/magic'},
]

// Division will be one of the main pages (basically a meta-category) Sports, Concerts, and Shows.
function DivisionPage() {
    return (
        <section className='division-page'>
            <header className='division-page-header'>
                <p className='division-page-eyebrow'>Explore</p>
                <h1>Choose a category.</h1>
            </header>

            <ul className='category-cards-list'>
                {categoryCards.map((categoryCard) => (
                    <li key={categoryCard.href}>
                        <CategoryCard {...categoryCard} />
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default DivisionPage;
