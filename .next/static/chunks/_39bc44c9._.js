(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/assets/img/bannertrabalheconosco.webp (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/bannertrabalheconosco.2d7eb657.webp");}),
"[project]/assets/img/bannertrabalheconosco.webp.mjs { IMAGE => \"[project]/assets/img/bannertrabalheconosco.webp (static in ecmascript)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$img$2f$bannertrabalheconosco$2e$webp__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/assets/img/bannertrabalheconosco.webp (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$img$2f$bannertrabalheconosco$2e$webp__$28$static__in__ecmascript$29$__["default"],
    width: 1440,
    height: 483,
    blurWidth: 8,
    blurHeight: 3,
    blurDataURL: "data:image/webp;base64,UklGRsEAAABXRUJQVlA4TLUAAAAvB4AAAM1VICICHgiwCQAAAADFDEd0DhAAjgAAIAAAAAAAAAAIAAAAAAAAAIAAgAAACOEEAQAAAPBAgE0AAAAAzn8LAHEIQAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAECA+wGIzQMBRwEAAAA4/xsY4kEAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAECAhKB95Pwj7pap1T4IoLTIBPvZuTvOc1erAFoUt+rn0jdd7szgb24IAA=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/trabalhe-conosco/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TrabalheConoscoPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$img$2f$bannertrabalheconosco$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$img$2f$bannertrabalheconosco$2e$webp__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/assets/img/bannertrabalheconosco.webp.mjs { IMAGE => "[project]/assets/img/bannertrabalheconosco.webp (static in ecmascript)" } [app-client] (structured image object with data url, ecmascript)');
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const fadeUp = {
    hidden: {
        opacity: 0,
        y: 30
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            type: "spring"
        }
    }
};
function TrabalheConoscoPage() {
    _s();
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        nome: "",
        email: "",
        telefone: "",
        mensagem: ""
    });
    const [curriculo, setCurriculo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }
    function handleFileChange(e) {
        if (e.target.files && e.target.files[0]) {
            setCurriculo(e.target.files[0]);
        }
    }
    async function handleSubmit(e) {
        e.preventDefault();
        if (!curriculo) {
            alert("Por favor, anexe seu currículo em PDF.");
            return;
        }
        setLoading(true);
        try {
            const formData = new FormData();
            formData.append("nome", form.nome);
            formData.append("email", form.email);
            formData.append("telefone", form.telefone);
            formData.append("mensagem", form.mensagem);
            formData.append("curriculo", curriculo);
            const res = await fetch("/api/trabalhe-conosco", {
                method: "POST",
                body: formData
            });
            const data = await res.json();
            if (data.success) {
                alert("Currículo enviado com sucesso 🚀");
                setForm({
                    nome: "",
                    email: "",
                    telefone: "",
                    mensagem: ""
                });
                setCurriculo(null);
            } else {
                alert("❌ Erro ao enviar: " + data.message);
            }
        } catch (err) {
            alert("❌ Falha ao conectar com o servidor.");
        } finally{
            setLoading(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative flex items-center justify-center min-h-screen px-6 pt-28 sm:pt-32 md:pt-36 pb-16",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-cover bg-center",
                style: {
                    backgroundImage: "url(".concat(__TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$img$2f$bannertrabalheconosco$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$img$2f$bannertrabalheconosco$2e$webp__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src, ")")
                }
            }, void 0, false, {
                fileName: "[project]/app/trabalhe-conosco/page.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/60"
            }, void 0, false, {
                fileName: "[project]/app/trabalhe-conosco/page.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 w-full max-w-3xl text-center text-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                        className: "text-3xl sm:text-4xl md:text-5xl font-bold mb-8",
                        variants: fadeUp,
                        initial: "hidden",
                        animate: "visible",
                        children: "Trabalhe Conosco"
                    }, void 0, false, {
                        fileName: "[project]/app/trabalhe-conosco/page.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                        className: "text-lg md:text-xl text-gray-200 leading-relaxed max-w-5xl mx-auto mb-10",
                        variants: fadeUp,
                        initial: "hidden",
                        animate: "visible",
                        children: [
                            "Quer fazer parte da nossa equipe? ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/app/trabalhe-conosco/page.tsx",
                                lineNumber: 103,
                                columnNumber: 45
                            }, this),
                            " Preencha o formulário abaixo e anexe seu currículo em PDF."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/trabalhe-conosco/page.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].form, {
                        onSubmit: handleSubmit,
                        className: "grid gap-6 bg-[#a8a8af61] text-dark p-8 rounded-xl shadow-lg",
                        variants: fadeUp,
                        initial: "hidden",
                        animate: "visible",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                name: "nome",
                                placeholder: "Nome",
                                value: form.nome,
                                onChange: handleChange,
                                className: "p-3 rounded-lg border border-gray-300 w-full",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/app/trabalhe-conosco/page.tsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "email",
                                name: "email",
                                placeholder: "Email",
                                value: form.email,
                                onChange: handleChange,
                                className: "p-3 rounded-lg border border-gray-300 w-full",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/app/trabalhe-conosco/page.tsx",
                                lineNumber: 123,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "tel",
                                name: "telefone",
                                placeholder: "Telefone",
                                value: form.telefone,
                                onChange: handleChange,
                                className: "p-3 rounded-lg border border-gray-300 w-full"
                            }, void 0, false, {
                                fileName: "[project]/app/trabalhe-conosco/page.tsx",
                                lineNumber: 132,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                name: "mensagem",
                                placeholder: "Mensagem",
                                value: form.mensagem,
                                onChange: handleChange,
                                className: "p-3 rounded-lg border border-gray-300 h-32 w-full",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/app/trabalhe-conosco/page.tsx",
                                lineNumber: 140,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "file",
                                accept: "application/pdf",
                                onChange: handleFileChange,
                                className: "p-3 rounded-lg border border-gray-300 w-full bg-white text-black",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/app/trabalhe-conosco/page.tsx",
                                lineNumber: 150,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                disabled: loading,
                                className: "bg-primary text-dark font-semibold py-3 rounded-lg hover:opacity-90 transition disabled:opacity-50",
                                children: loading ? "Enviando..." : "Enviar Currículo"
                            }, void 0, false, {
                                fileName: "[project]/app/trabalhe-conosco/page.tsx",
                                lineNumber: 158,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/trabalhe-conosco/page.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                        className: "mt-6 text-base md:text-lg text-gray-200 text-center",
                        variants: fadeUp,
                        initial: "hidden",
                        animate: "visible",
                        children: [
                            "Prefere falar direto com a gente? ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/app/trabalhe-conosco/page.tsx",
                                lineNumber: 174,
                                columnNumber: 45
                            }, this),
                            "Nos chame no",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://wa.me/5508002000091",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "text-primary font-semibold hover:underline",
                                children: "WhatsApp"
                            }, void 0, false, {
                                fileName: "[project]/app/trabalhe-conosco/page.tsx",
                                lineNumber: 176,
                                columnNumber: 11
                            }, this),
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/trabalhe-conosco/page.tsx",
                        lineNumber: 168,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/trabalhe-conosco/page.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/trabalhe-conosco/page.tsx",
        lineNumber: 77,
        columnNumber: 5
    }, this);
}
_s(TrabalheConoscoPage, "ayKRfVzw6o5wHbH4XXgz6He89Yw=");
_c = TrabalheConoscoPage;
var _c;
__turbopack_context__.k.register(_c, "TrabalheConoscoPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_39bc44c9._.js.map