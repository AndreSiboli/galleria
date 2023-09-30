import { useState, ChangeEvent } from 'react';
import { projects } from '@/data/Projects';
import styles from '@/styles/Home.module.scss';

import Container from '@/components/layout/Container';
import Input from '@/components/form/Input';
import Submit from '@/components/form/Submit';
import Textarea from '@/components/form/Textarea';
import GridImage from '@/components/home/GridImage';

export default function Home() {
    const [dataInput, setDataInput] = useState({
        name: '',
        email: '',
        content: '',
    });

    function changeValue(e: ChangeEvent<HTMLInputElement>) {
        const target = e.target;
        const name = target.name;
        setDataInput({ ...dataInput, [name]: target.value });
    }
    return (
        <>
            <main className={styles.main}>
                <Container>
                    <div className={styles.pictures_container}>
                        {projects.map((project) => (
                            <GridImage data={project} key={project.id + project.to} />
                        ))}
                    </div>
                </Container>
            </main>
            <section className={styles.about} id="about">
                <Container>
                    <div className={styles.about_container}>
                        <h2>Sobre</h2>
                        <div className={styles.about_wrapper}>
                            <div className={styles.about_merchan}>
                                <p>
                                    A <span>Galleria</span> é um site de fotos que oferece uma ampla
                                    variedade de imagens incríveis de alta qualidade para todos os
                                    gostos. Se você está procurando fotos de paisagens
                                    deslumbrantes, retratos cativantes, cenas urbanas
                                    impressionantes ou imagens abstratas interessantes, temos o que
                                    você precisa.
                                    <br />
                                    <br />
                                    Nossa interface amigável permite que você navegue facilmente
                                    pelo nosso site, procurando por imagens que atendam às suas
                                    necessidades. Também fornecemos ferramentas úteis, como filtros
                                    de pesquisa avançados, para que você possa encontrar a imagem
                                    perfeita em segundos.
                                    <br />
                                    <br />
                                    Por fim, a <span>Galleria</span> é um lugar onde a arte e a
                                    tecnologia se encontram, e onde fotógrafos e usuários podem se
                                    conectar e compartilhar sua paixão pela fotografia. Esperamos
                                    que você aproveite a sua visita ao nosso site e descubra a
                                    beleza das imagens que temos a oferecer.
                                    <br />
                                    <br />
                                    Obrigado por escolher a <span>Galleria</span>!
                                </p>
                            </div>
                            <div className={styles.about_image}>
                                <div className={styles.about_image_wrapper}></div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            <section className={styles.contact} id="contact">
                <div className={styles.contact_container}>
                    <div className={styles.contact_image}></div>
                    <div className={styles.contact_form}>
                        <form action="" className={styles.form}>
                            <legend>Contato</legend>
                            <div className={styles.input_container}>
                                <Input
                                    text="Nome"
                                    id="name"
                                    type="text"
                                    value={dataInput.name}
                                    handleInput={changeValue}
                                />
                            </div>
                            <div className={styles.input_container}>
                                <Input
                                    text="Email"
                                    id="email"
                                    type="email"
                                    value={dataInput.email}
                                    handleInput={changeValue}
                                />
                            </div>
                            <div className={styles.input_container}>
                                <Textarea
                                    id="content"
                                    value={dataInput.content}
                                    text="Assunto"
                                    handleInput={changeValue}
                                />
                            </div>
                            <div className={styles.input_container}>
                                <Submit text="Enviar" id="submitBtn" handleSubmit={() => {}} />
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}
