public class Program
{
    static void Main(string[] args)
    {
        int[] myArray = RandomArray(10000);
        int[] mannequin = new int[1];
        mannequin = BubbleSort(myArray);
        mannequin = ShellSort(myArray);
        Console.WriteLine("Bubble Sort");

    }
    static int[] RandomArray(int length)
    {
        int[] data = new int[length];
        var rand = new Random();

        for (int i = 0; i < length; i++)
        {
            data[i] = rand.Next();
        }
        return data;
    }

}

