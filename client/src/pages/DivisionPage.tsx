import { CategoryCard, type CategoryCardProps } from "../components/CategoryCard";
// Division will be one of the main pages (basically a meta-category) Sports, Concerts, and Shows.
function DivisionPage() {
    const categoryCards: CategoryCardProps[] = [
        {title: 'NBA', href: '/category/nba'},
        {title: 'MLB', href: '/category/mlb'},
        {title: 'NFL', href: '/category/nfl'},
        {title: 'Rock', href: '/category/rock'},
        {title: 'Country', href: '/category/country'},
        {title: 'Comedy', href: '/category/comedy'},
        {title: 'Magic', href: '/category/magic'},
    ]

    return (
        <span>
            <ul>
                {categoryCards.map((categoryCard) => (
                    <li>
                        <CategoryCard key={categoryCard.href} {...categoryCard} />
                    </li>
                ))}
            </ul>
        </span>
    );
}

export default DivisionPage;