import { Text, TextInput, View } from 'react-native';

import Calendar from '@/assets/icons/Calendar.svg';
import DownRed from '@/assets/icons/DownRed.svg';
import Filter from '@/assets/icons/Filter.svg';
import Logout from '@/assets/icons/Logout.svg';
import Tag from '@/assets/icons/Tag.svg';
import UpGreen from '@/assets/icons/UpGreen.svg';
import { Button, Image, Pressable } from '@/components/ui';
import KeyboardAwareScrollView from '@/components/ui/KeyboardAwareScrollView';
import { summaries, transactions } from '@/Mocks/HomeMock';

export type Summary = {
  title: string;
  amount: string;
  description: string;
  variant: 'default' | 'total';
  icon: 'up' | 'down';
};

export type Transaction = {
  id: string;
  title: string;
  amount: string;
  type: 'income' | 'outcome';
  category: string;
  date: string;
};

const SummaryCard = ({ summary }: { summary: Summary }) => {
  const isTotal = summary.variant === 'total';
  const Icon = summary.icon === 'up' ? UpGreen : DownRed;

  return (
    <View
      className={`h-[100px] w-[198px] justify-between rounded-md p-5 ${
        isTotal ? 'bg-[#015F43]' : 'bg-[#29292E]'
      }`}
    >
      <View className="flex-row items-center justify-between">
        <Text className="font-poppins_regular text-sm text-[#E1E1E6]">
          {summary.title}
        </Text>

        <Icon height={22} width={22} />
      </View>

      <View className="gap-1">
        <Text className="font-poppins_semibold text-xl text-white">
          {summary.amount}
        </Text>

        <Text className="font-poppins_regular text-xs text-[#7C7C8A]">
          {summary.description}
        </Text>
      </View>
    </View>
  );
};

const TransactionCard = ({ transaction }: { transaction: Transaction }) => {
  const isIncome = transaction.type === 'income';

  return (
    <View className="rounded-md bg-[#29292E] px-4 py-[18px]">
      <Text className="font-poppins_regular text-sm text-[#E1E1E6]">
        {transaction.title}
      </Text>

      <Text
        className={`font-poppins_semibold mt-1 text-lg ${
          isIncome ? 'text-[#00B37E]' : 'text-[#F75A68]'
        }`}
      >
        {transaction.amount}
      </Text>

      <View className="mt-3 flex-row items-center justify-between">
        <View className="flex-row items-center gap-1">
          <Tag height={10} width={14} />

          <Text className="font-poppins_regular text-xs text-[#7C7C8A]">
            {transaction.category}
          </Text>
        </View>

        <View className="flex-row items-center gap-1">
          <Calendar height={14} width={14} />

          <Text className="font-poppins_regular text-xs text-[#7C7C8A]">
            {transaction.date}
          </Text>
        </View>
      </View>
    </View>
  );
};

const HomeScreen = () => {
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ paddingBottom: 24 }}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
      // eslint-disable-next-line react-native/no-color-literals
      style={{ flex: 1, backgroundColor: '#202024' }}
    >
      <View className="bg-[#121214] px-4 pb-[70px] pt-10">
        <View className="flex-row items-center justify-between">
          <View className="gap-2">
            <Image
              className="h-6 w-[115px]"
              contentFit="contain"
              source={require('@/assets/images/Logo.png')}
            />

            <Pressable className="flex-row items-center gap-1 pl-3">
              <Logout height={12} width={12} />

              <Text className="font-poppins_regular text-xs text-[#7C7C8A]">
                Sair da conta
              </Text>
            </Pressable>
          </View>

          <Button
            withoutDelay
            className="h-[40px] rounded-md px-2"
            color="#00875F"
            text="Nova transação"
            textClassName="font-roboto_condensed_bold text-sm"
            width="auto"
          />
        </View>
      </View>

      <View className="-mt-[48px]">
        <KeyboardAwareScrollView
          horizontal
          contentContainerStyle={{
            gap: 12,
            paddingLeft: 16,
            paddingRight: 16,
          }}
          keyboardShouldPersistTaps="handled"
          showsHorizontalScrollIndicator={false}
        >
          {summaries.map(summary => (
            <SummaryCard key={summary.title} summary={summary} />
          ))}
        </KeyboardAwareScrollView>
      </View>

      <View className="mt-6 gap-3 px-4">
        <View className="flex-row items-center justify-between">
          <Text className="font-poppins_semibold text-lg text-[#E1E1E6]">
            Transacoes
          </Text>

          <Text className="font-poppins_regular text-sm text-[#7C7C8A]">
            4 itens
          </Text>
        </View>

        <View className="h-[42px] flex-row items-center bg-[#121214] pl-3 pr-4">
          <TextInput
            className="font-poppins_regular h-full flex-1 text-sm text-white"
            placeholder="Busque uma transação"
            placeholderTextColor="#7C7C8A"
          />

          <Filter height={11} width={21} />
        </View>

        <View className="gap-2">
          {transactions.map(transaction => (
            <TransactionCard key={transaction.id} transaction={transaction} />
          ))}
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default HomeScreen;
