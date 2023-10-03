"use client";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import Form from "@components/Form";

const CreatePrompt = () => {
    const [submit, setsubmit] = useState(false);

    return (
        <>
            <Form />
        </>
    );
};

export default CreatePrompt;
