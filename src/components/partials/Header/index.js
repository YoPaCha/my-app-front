"use client";
import { useState } from "react";
import Link from "next/link";
import ServerlessService from "@/services/serverless.api";
import SearchInput from '@/components/UI/SearchInput';
import Button from "@/components/UI/Button";
import Modal from "@/components/UI/Modal";
import Input from "@/components/UI/Input";
import styles from "./index.module.css";

const Index = () => {

    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        email: ""
    });

    return (
        <>
            {
                showModal && (
                    <Modal
                        onClose={() => setShowModal(false)}
                    >
                        <h2>Inscription à la newsletter</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae aut iste perspiciatis.</p>
                        <form
                            onSubmit={
                                (e) => {
                                    e.preventDefault();
                                    console.log(formData);
                                    ServerlessService.subscribeNewsletter(formData)
                                        .then(data => console.log(data, "data"))
                                        .catch(err => console.log(err));
                                }
                            }
                        >
                            <Input
                                type="email"
                                label="Votre email"
                                name="email"
                                value={formData.email}
                                handleChange={(e) => {
                                    setFormData({
                                        [e.target.name]: e.target.value
                                    })
                                }}
                            />
                            <Button
                                text="S'inscrire"
                            />
                        </form>
                    </Modal>  
                )
            }
        <header className={styles.header__main}>
            <Link href="/">
                <h1 className={styles.logo}>My wonderfull app</h1>
            </Link>
            <div className={styles.right__part}>
                <SearchInput />
                    <Button
                        handleClick={() => setShowModal(true)}
                        text="inscription à la newsletter" />
            </div>
            </header>
        </>
    );
}

export default Index;