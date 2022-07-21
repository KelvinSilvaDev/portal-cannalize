export const formatDate = (date: Date) => {
  const data = new Date(date);
  return `${data.getDate()} de ${data.toLocaleString("pt-BR", {
    month: "long",
  })}`;
};

export function formatPhone(phone: string): string {
  let formattedPhone = phone;

  if (formattedPhone.length <= 14) {
    formattedPhone = clearMask(formattedPhone);

    formattedPhone = formattedPhone.replace(/(\d{0})(\d)/, "$1($2");
    formattedPhone = formattedPhone.replace(/(\d{2})(\d)/, "$1) $2");
    formattedPhone = formattedPhone.replace(/(\d{4})(\d)/, "$1-$2");
  } else if (formattedPhone.length === 15) {
    formattedPhone = clearMask(formattedPhone);

    formattedPhone = formattedPhone.replace(/(\d{0})(\d)/, "$1($2");
    formattedPhone = formattedPhone.replace(/(\d{2})(\d)/, "$1) $2");
    formattedPhone = formattedPhone.replace(/(\d{5})(\d)/, "$1-$2");
  } else {
    formattedPhone = formattedPhone.slice(0, 15);
  }
  return formattedPhone;
}

export function formatCpf(cpf: string): string {
  if (cpf.length >= 14) return cpf.slice(0, 14);

  let formattedCpf = cpf;
  formattedCpf = clearMask(cpf);

  formattedCpf = formattedCpf.replace(/(\d{3})(\d)/, "$1.$2");
  formattedCpf = formattedCpf.replace(/(\d{3})(\d)/, "$1.$2");
  formattedCpf = formattedCpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

  return formattedCpf;
}

export function keepOnlyDigits(value: string) {
  return value.replace(/\D/g, "");
}

export function formatZipCode(zipCode: string): string {
  if (zipCode.length >= 9) return zipCode.slice(0, 9);

  let formattedZipCode = zipCode;
  formattedZipCode = clearMask(formattedZipCode);
  formattedZipCode = formattedZipCode.replace(/(\d{5})(\d)/, "$1-$2");

  return formattedZipCode;
}

export function clearMask(value: string): string {
  return value.replace(/\D/g, "");
}
