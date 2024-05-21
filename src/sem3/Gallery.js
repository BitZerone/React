export function Profile(){
    return <img src='https://i.pinimg.com/280x280_RS/cb/b2/80/cbb280fa8c687cf3b137df878bf82d08.jpg' alt='Imagem Random' />;
}

function Gallery() {
    return (
        <section>
            <h1>1.1</h1>
            <Profile />
            <Profile />
            <Profile />
        </section>
    );
}

export default Gallery;