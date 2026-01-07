import { useParams } from "react-router-dom"

const data = {
    aboutUs: {
        title: "About Us",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Facilis, perspiciatis repellat maxime, adipisci non ipsam at itaque rerum vitae, necessitatibus nulla animi expedita cumque provident inventore? Voluptatum in tempora earum deleniti, culpa odit veniam, ea reiciendis sunt ullam temporibus aut! Fugit eaque illum blanditiis, quo exercitationem maiores autem laudantium unde excepturi dolores quasi eos vero harum ipsa quam laborum illo aut facere voluptates aliquam adipisci sapiente beatae ullam.Tempora culpa iusto illum accusantium cum hic quisquam dolor placeat officiis eligendi."
    },
    contactUs: {
        title: "Contact Us",
        text: "Lorem ipsum dolor sit amet."

    },
    service: {
        title: "Our Services",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Facilis, perspiciatis repellat maxime, adipisci non ipsam at itaque rerum vitae, necessitatibus nulla animi expedita cumque provident inventore? Voluptatum in tempora earum deleniti, culpa odit veniam, ea reiciendis sunt ullam temporibus aut! Fugit eaque illum blanditiis, quo exercitationem maiores autem laudantium unde excepturi dolores quasi eos vero harum ipsa quam laborum illo aut facere voluptates aliquam adipisci sapiente beatae ullam.Tempora culpa iusto illum accusantium cum hic quisquam dolor placeat officiis eligendi."

    },
    terms: {
        title: "Terms and Conditions",
        text: "Lorem ipsum dolor sit amet, perspiciatis repellat maxime, adipisci non ipsam at itaque rerum vitae, necessitatibus nulla animi expedita cumque provident inventore? Voluptatum in tempora earum deleniti, culpa odit veniam, ea reiciendis sunt ullam temporibus aut! Fugit eaque illum blanditiis, quo exercitationem maiores autem laudantium unde excepturi dolores quasi eos vero harum ipsa quam laborum illo aut facere voluptates aliquam adipisci sapiente beatae ullam.Tempora culpa iusto illum accusantium cum hic quisquam dolor placeat officiis eligendi."

    }
}


function CommonPage() {

    const { id } = useParams()

    let renderContent

    if (id == "about")
    {
        renderContent = data.aboutUs
    } else if (id == "contact")
    {
        renderContent = data.contactUs
    } else if (id == "services")
    {
        renderContent = data.service
    } else
    {
        renderContent = data.terms
    }
    return (
        <div>
            <h2>{renderContent.title}</h2>
            <div>{renderContent.text}</div>
        </div>
    )
}

export default CommonPage