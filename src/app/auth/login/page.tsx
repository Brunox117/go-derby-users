"use client";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de autenticación
    // Por ahora, redireccionamos directamente a la página principal
    router.push("/");
  };

  return (
    <div>
      <form className="mb-6" onSubmit={handleSubmit}>
        <FieldGroup>
          <div className="flex flex-col items-center gap-2 text-center">
            <h1 className="text-xl font-bold">Bienvenido a</h1>
            <h1 className="font-mestizo text-xl font-bold">Go Derby</h1>
            <FieldDescription>
              No tienes una cuenta?{" "}
              <Link href="/auth/register">Registrate aquí</Link>
            </FieldDescription>
          </div>
          <Field>
            <FieldLabel htmlFor="email">Correo</FieldLabel>
            <Input
              id="email"
              type="email"
              placeholder="correo@ejemplo.com"
              required
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="password">Contraseña</FieldLabel>
            <Input
              id="password"
              type="password"
              placeholder="contraseña"
              required
            />
          </Field>
          <Field>
            <Button type="submit">Iniciar sesión</Button>
          </Field>
        </FieldGroup>
      </form>
      <FieldDescription className="px-6 text-center">
        Al continuar, aceptas nuestros <a href="#">Términos de servicio</a> y{" "}
        <a href="#">Política de privacidad</a>.
      </FieldDescription>
    </div>
  );
}
